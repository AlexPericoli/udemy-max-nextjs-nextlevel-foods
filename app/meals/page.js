import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our awesome community",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const loading = () => (
  <h2 className={classes.loading}>
    Fetching meals... Wait a few seconds, please
  </h2>
);

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={loading()}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
