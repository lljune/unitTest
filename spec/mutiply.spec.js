//测试文件默认一般以.test.js结尾 .spec.js结尾
const mutiply = require('../src/mutiply');

//describe 测试套件（对测试用例的分组）=> test或it 一堆测试用例
describe("乘法", () => {
  //describe 套件（对测试用例的分组）=> it 一堆测试用例
  test('测试1乘4等于4', () => {
    expect(mutiply(1, 4)).toBe(4);
  });
  // it('测试1乘4等于4', () => {
  //   expect(mutiply(1, 3)).toBe(4);
  // });
})

//匹配器一般分为三类（方便记忆）
it('测试相等情况（全等、长得一样、真假）', () => {
  expect(1 + 1).toBe(2);
  expect({name: "jravity"}).toEqual({name: "jravity"});
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});
it('测试不相等（大于、小于、大于等于、小于等于）', () => {
  expect(1 + 1).not.toBe(3);
  expect(1 + 1).toBeLessThan(3);
  expect(1 + 1).toBeGreaterThanOrEqual(0);
});
it('是否包含、匹配', () => {
  expect("hello").toContain("o");
  expect("hello").toMatch(/hello/);
});


// jest --watchAll
// Watch Usage
//  › Press f to run only failed tests.  只监听之前失败的测试用例
//  › Press o to only run tests related to changed files.  如果有git，每次提交后都不进行测试
//  › Press p to filter by a filename regex pattern.
//  › Press t to filter by a test name regex pattern.
//  › Press q to quit watch mode.
//  › Press Enter to trigger a test run.

// it.only('是否包含、匹配', () => {
//   expect("hello1").toContain("o");
//   expect("hello").toMatch(/hello/);
// });
