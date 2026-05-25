export type RunType = "Easy Run" | "Tempo Run" | "Long Run" | "Recovery Run";

export type LatLng = [number, number];

export interface RunSplit {
  km: number;
  pace: string;
}

export interface Run {
  id: number;
  type: RunType;
  date: string;
  distance: number;
  duration: string;
  pace: string;
  city: "Chelyabinsk" | "Kamensk-Uralsky";
  notes: string;
  elevation: number;
  route: LatLng[];
  splits: RunSplit[];
}

export interface Profile {
  name: "Ирина";
}
