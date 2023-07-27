export interface Event {
  img: string;
  name: string;
  hours: string;
  description: string;
  lien: string|null;
}

export interface DayEvents {
    day: string;
    events: Event[];
}