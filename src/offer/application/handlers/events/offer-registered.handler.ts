import { EventsHandler } from '@nestjs/cqrs/dist/utils/events-handler.decorator';
import { OfferRegisteredEvent } from '../../../domain/events/offer-registered.event';
import { IEventHandler } from '@nestjs/cqrs';

@EventsHandler(OfferRegisteredEvent)
export class OfferRegisteredHandler
  implements IEventHandler<OfferRegisteredEvent>
{
  constructor() {}

  async handle(event: OfferRegisteredEvent) {
    console.log(event);
  }
}