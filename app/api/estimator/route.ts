import { NextResponse } from 'next/server';
import { z } from 'zod';

// Strict validation for the incoming estimator data
const estimatorSchema = z.object({
    appType: z.enum(['web', 'mobile', 'both']),
    featureCount: z.number().min(1).max(50),
    timeline: z.enum(['relaxed', 'standard', 'rush']),
    aiIntegration: z.boolean()
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = estimatorSchema.parse(body);
        const { appType, featureCount, timeline, aiIntegration } = validatedData;

        // 1. Base Cost Calculation
        let baseCost = 0;
        if (appType === 'web') baseCost = 1000;
        else if (appType === 'mobile') baseCost = 1500;
        else if (appType === 'both') baseCost = 2500;

        // 2. Feature Complexity ($100 per feature baseline)
        const featureCost = featureCount * 100;

        // 3. AI/Advanced Tech Integration Flat Fee
        const aiCost = aiIntegration ? 1500 : 0;

        // Subtotal before timeline multipliers
        const subtotal = baseCost + featureCost + aiCost;

        // 4. Timeline Multipliers
        let timelineMultiplier = 1; // Standard
        if (timeline === 'relaxed') timelineMultiplier = 0.8; // 20% discount for flexible timelines
        if (timeline === 'rush') timelineMultiplier = 1.5; // 50% premium for rush delivery

        // Calculate raw mathematical min/max (creates a 30% spread for the range)
        const rawMin = Math.round((subtotal * timelineMultiplier) * 0.85);
        const rawMax = Math.round((subtotal * timelineMultiplier) * 1.15);

        // 5. Agency Tier Classification
        let tier = 'Essential';
        if (rawMax >= 4500) {
            tier = 'Premium / Enterprise';
        } else if (rawMax >= 2000) {
            tier = 'Professional';
        }

        // Format to clean USD strings
        const formattedMin = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(rawMin);

        const formattedMax = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(rawMax);

        // Return the calculated data to the frontend
        return NextResponse.json(
            {
                success: true,
                data: {
                    range: `${formattedMin} - ${formattedMax}`,
                    tier: tier,
                    rawMin: rawMin,
                    rawMax: rawMax
                }
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Estimator API Error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation Failed', issues: error.issues },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}