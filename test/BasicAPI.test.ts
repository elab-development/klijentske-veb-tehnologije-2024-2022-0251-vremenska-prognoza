import axios from "axios";
import { expect, test } from "vitest";

test("WeatherAPI returns expected data", async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&appid=e9556ef189dfac54a39e61244972eac2`,
  );
  expect(data).toHaveProperty("main");
  expect(data).toHaveProperty("weather");
});
