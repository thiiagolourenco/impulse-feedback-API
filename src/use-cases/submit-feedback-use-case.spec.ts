import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe("Test submit feedback", () => {
  it("Should to able to submit a feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,976yu8760test",
      })
    ).resolves.not.toThrow();
  });
});

/*jest.fn(); é uma função espiã, 
  para que seja possível saber se 
  uma determinanda função da função 
  que esá sendo testada vai ser chamada
*/
