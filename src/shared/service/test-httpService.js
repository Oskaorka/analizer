// Тестовый скрипт для проверки работы httpService
import httpService from "./httpService.js";
import shopService from "./shopService.js";

// Тест 1: Прямой запрос через httpService
async function testHttpService() {
  console.log("=== Тест 1: Прямой запрос через httpService ===");
  try {
    const response = await httpService.get("shop");
    console.log("✅ Успешно! Данные получены:");
    console.log(response.data);
    return true;
  } catch (error) {
    console.error("❌ Ошибка при запросе:", error.message);
    if (error.response) {
      console.error("Статус:", error.response.status);
      console.error("Данные ошибки:", error.response.data);
    }
    return false;
  }
}

// Тест 2: Запрос через shopService
async function testShopService() {
  console.log("\n=== Тест 2: Запрос через shopService ===");
  try {
    const data = await shopService.fetchAll();
    console.log("✅ Успешно! Данные получены:");
    console.log(data);
    return true;
  } catch (error) {
    console.error("❌ Ошибка при запросе:", error.message);
    return false;
  }
}

// Запуск тестов
async function runTests() {
  console.log("Начало тестирования httpService...\n");

  const test1 = await testHttpService();
  const test2 = await testShopService();

  console.log("\n=== Результаты тестирования ===");
  console.log(`Тест 1 (httpService): ${test1 ? "✅ ПРОЙДЕН" : "❌ ПРОВАЛЕН"}`);
  console.log(`Тест 2 (shopService): ${test2 ? "✅ ПРОЙДЕН" : "❌ ПРОВАЛЕН"}`);

  if (test1 && test2) {
    console.log("\n🎉 Все тесты пройдены успешно!");
  } else {
    console.log(
      "\n⚠️ Некоторые тесты провалены. Проверьте конфигурацию и доступность API."
    );
  }
}

// Раскомментируйте следующую строку для запуска тестов в Node.js окружении
// runTests().catch(console.error);

export { testHttpService, testShopService, runTests };
