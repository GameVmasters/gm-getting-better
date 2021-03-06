import { Result } from 'typescript-result';
import { AppNotification } from '../../../common/application/app.notification';

export class OfferTitle {
  private readonly value: string;
  private static MAX_LENGTH = 225;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Result<AppNotification, OfferTitle> {
    const notification: AppNotification = new AppNotification();
    value = (value ?? '').trim();
    if (value === '') {
      notification.addError('offer number is required', null);
    }
    if (value.length > this.MAX_LENGTH) {
      notification.addError(
        'The maximum length of an offer number is ' +
          this.MAX_LENGTH +
          ' characters including spaces',
        null,
      );
    }
    if (notification.hasErrors()) {
      return Result.error(notification);
    }
    return Result.ok(new OfferTitle(value));
  }

  public getValue(): string {
    return this.value;
  }
}
