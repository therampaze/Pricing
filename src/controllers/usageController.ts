// import { Request, Response } from 'express';
// import PricingModel from '../models/pricingModel';

// export const getUserUsage = async (req: Request, res: Response) => {
//     try {
//         const { userId } = req.params;
//         const usageData = await PricingModel.find({ userId });

//         res.json({ userId, usage: usageData });
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// };
