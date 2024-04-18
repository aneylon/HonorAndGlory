export interface NarrativeRoster {
  id: number;
  PlayerName: string;
  playerId: number;
  glory: number;
  warbandName: string;
  reputaiton: number;
  warbandFaction: string;
  grandAlliance: string;
  // Encampment
  location: string;
  locationBonus: string;
  pointsLimit: number;
  reputationModifier: number;
  state: string;
  secure: boolean;
  threatened: boolean;
  compromised: boolean;
  // Quest
  questName: string;
  questLog: string;
  questReward: string;
  // Campaign Arc
  campaignArcName: string;
  campaignArcLog: string;
  campaignArcReward: string;
  // Achievements
  battlesFought: number;
  VictoriesWon: number;
  questsCompleted: number;
  campaignArcsCompleted: number;
  fightersKilled: number;
  enemyFightersSlain: number;
  // stuff ?
  openPlayGloryTable: [string];
  notes: string;
}
