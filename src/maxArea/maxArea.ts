// function maxArea(height: number[]): number {
//   let res = 0;
//   for (let left = 0; left < height.length; left++) {
//     for (let right = left + 1; right < height.length; right++) {
//       res = Math.max(
//         res,
//         Math.min(height[left], height[right]) * (right - left)
//       );
//     }
//   }

//   return res;
// }
function maxArea(height: number[]): number {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return res;
}
// def maxArea(self, height: List[int]) -> int:
// maxarea = 0
// left = 0
// right = len(height) - 1

// while left < right:
//     width = right - left
//     maxarea = max(maxarea, min(height[left], height[right]) * width)
//     if height[left] <= height[right]:
//         left += 1
//     else:
//         right -= 1

// return maxarea
export default maxArea;
