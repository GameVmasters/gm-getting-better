export class AuthenticateCoachResponseDto{
    constructor(
      public readonly id: number,
      public readonly nameCoach: string,
      public readonly email: string,
      public readonly password: string,
      public readonly descriptionCoach: string,
      public readonly imgCoach: string,
    ) {}
  }