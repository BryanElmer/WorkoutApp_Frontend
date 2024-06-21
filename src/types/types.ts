export type Workout = {
  _id: string,
  title: string,
  reps: number,
  load: number,
  createdAt: Date
};

export type User = {
  _id: string,
  email: string,
  token: string
};