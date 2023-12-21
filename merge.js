function merge(nums1, m, nums2, n) {
    nums1.splice(m, m + n);
    nums1.push(...nums2.slice(0, n));
    nums1.sort((a, b) => a - b);
    console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);