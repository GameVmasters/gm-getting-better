export class CreateNewOfferRequestDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly pricePerIndividualSession: number,
    public readonly pricePerGroupSession: number,
    public readonly typeMoney: string,
    public readonly statusPublication: boolean,
    public readonly createdAt: string,
  ) {}
}