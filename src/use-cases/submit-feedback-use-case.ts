import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailerAdaptor: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshor format.");
    }

    this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    this.mailerAdaptor.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: san-serif; font-size: 16px">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Tipo de comment: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}">` : "",
        `</div>`,
      ].join("\n"),
    });
  }
}
