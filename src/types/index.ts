export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: 'SOLID' | 'LIQUID';
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Record<string, unknown>;
};

export type RecipeInfo = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  analyzedInstructions: {
    name: string;
    steps: {
      number: string;
      step: string;
    }[];
  }[];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  instructions: string;
  occasions: string[];
  diets: string[];
  nutrition: {
    nutrients: Nutrient[]
  }
};

export type ISODateTime = string;

export type TimeStamp = {
  datetime: ISODateTime;
  timezone: string;
};

export type Nutrient = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

export type NutritionSummary = {
  nutrients: Nutrient[];
};

export type MealItem = {
  id: number;
  slot: number;
  position: number;
  type: string;
  value: {
    servings: number;
    id: number;
    title: string;
    imageType?: string;
    ingredients?: { name: string; unit: string; amount: string; image: string; }[];
  };
};

export type DayMealPlan = {
  nutritionSummary: NutritionSummary;
  nutritionSummaryBreakfast: NutritionSummary;
  nutritionSummaryLunch: NutritionSummary;
  nutritionSummaryDinner: NutritionSummary;
  date: number;
  day: string;
  items: MealItem[];
};

export type MealPlan = {
  days: DayMealPlan[];
};