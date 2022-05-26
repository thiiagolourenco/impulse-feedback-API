import { prisma } from "../prisma";
import {
  FeedbackRepository,
  FeedbackRepositoryCreateData,
} from "./feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackRepositoryCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
