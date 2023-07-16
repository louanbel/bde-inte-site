export interface Event {
  img: string;
  name: string;
  hours: string;
  description: string;
}

export interface DayEvents {
    day: string;
    events: Event[];
}