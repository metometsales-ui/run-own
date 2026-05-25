import type { Profile, Run } from "../types/run";
import {
  chelyabinskLoop,
  chelyabinskRiver,
  kamenskTempo,
  kamenskTrack
} from "../maps/routePresets";

export const profile: Profile = {
  name: "Ирина"
};

export const seedRuns: Run[] = [
  {
    id: 1,
    type: "Tempo Run",
    date: "2026-05-20",
    distance: 10.4,
    duration: "00:52:14",
    pace: "5:01",
    city: "Chelyabinsk",
    notes: "Strong pace, controlled finish.",
    elevation: 62,
    route: chelyabinskRiver,
    splits: [
      { km: 1, pace: "5:09" },
      { km: 2, pace: "5:05" },
      { km: 3, pace: "5:00" },
      { km: 4, pace: "4:58" },
      { km: 5, pace: "4:55" }
    ]
  },
  {
    id: 2,
    type: "Easy Run",
    date: "2026-05-21",
    distance: 6.2,
    duration: "00:36:41",
    pace: "5:55",
    city: "Kamensk-Uralsky",
    notes: "Calm aerobic work.",
    elevation: 31,
    route: kamenskTrack,
    splits: [
      { km: 1, pace: "5:57" },
      { km: 2, pace: "5:51" },
      { km: 3, pace: "5:58" },
      { km: 4, pace: "5:54" },
      { km: 5, pace: "5:56" }
    ]
  },
  {
    id: 3,
    type: "Recovery Run",
    date: "2026-05-22",
    distance: 4.8,
    duration: "00:31:12",
    pace: "6:30",
    city: "Chelyabinsk",
    notes: "Light legs, low HR.",
    elevation: 18,
    route: chelyabinskLoop,
    splits: [
      { km: 1, pace: "6:36" },
      { km: 2, pace: "6:28" },
      { km: 3, pace: "6:31" },
      { km: 4, pace: "6:25" }
    ]
  },
  {
    id: 4,
    type: "Long Run",
    date: "2026-05-24",
    distance: 15.7,
    duration: "01:29:31",
    pace: "5:42",
    city: "Kamensk-Uralsky",
    notes: "Long steady route with last 3 km faster.",
    elevation: 94,
    route: kamenskTempo,
    splits: [
      { km: 1, pace: "5:51" },
      { km: 2, pace: "5:46" },
      { km: 3, pace: "5:43" },
      { km: 4, pace: "5:39" },
      { km: 5, pace: "5:35" }
    ]
  },
  {
    id: 5,
    type: "Easy Run",
    date: "2026-05-25",
    distance: 7.1,
    duration: "00:41:19",
    pace: "5:49",
    city: "Chelyabinsk",
    notes: "Smooth morning rhythm.",
    elevation: 39,
    route: chelyabinskLoop,
    splits: [
      { km: 1, pace: "5:54" },
      { km: 2, pace: "5:47" },
      { km: 3, pace: "5:48" },
      { km: 4, pace: "5:50" },
      { km: 5, pace: "5:46" }
    ]
  }
];
