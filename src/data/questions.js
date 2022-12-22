const questions = [
    {
        title: "Two Sum",
        category: "Arrays",
        difficulty: "Easy",
        description: "Given an array of integers \"nums\" and an integer \"target\", return indices of the two numbers such that they add up to \"target\". You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
        link: "https://leetcode.com/problems/two-sum/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Ivyh3V4QolA",
                title: "How To Solve Algorithms - Two Sum"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Yyyi12oaK94",
                title: "LeetCode Exercise in Java Tutorial - Two Sum FAST Solution"
            },
        ],
    },
    {
        title: "Best Time to Buy and Sell Stock",
        category: "Arrays",
        difficulty: "Easy",
        description: "You are given an array <code>prices where prices[i]</code> is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=3RHCb8LY-X4",
                title: "LeetCode Best Time to Buy and Sell Stock Solution Explained - Java"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=9ZMMNyHy3z4",
                title: "LeetCode Solution - 121 Best time to Buy and Sell Stock | Javascript"
            },
        ],
    },
    {
        title: "Contains Duplicate",
        category: "Arrays",
        difficulty: "Easy",
        description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        link: "https://leetcode.com/problems/contains-duplicate/",
    },
    {
        title: "Product of Array Except Self",
        category: "Arrays",
        difficulty: "Medium",
        description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=tSRFtR3pv74",
                title: "LeetCode 238. Product of Array Except Self (Solution Explained)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=gREVHiZjXeQ",
                title: "Product of array except self | Leetcode #238"
            },
        ],
    },
    {
        title: "Maxiumum Subarray",
        category: "Arrays",
        difficulty: "Medium",
        description: "Given an integer array nums, find the subarray which has the largest sum and return its sum.",
        link: "https://leetcode.com/problems/maximum-subarray/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=jnoVtCKECmQ",
                title: "Kadane's Algorithm - Maximum Sum Subarray (Amazon Coding Interview Question)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=A6foafQNih8",
                title: "Leetcode - Maximum Subarray (Python)"
            },
        ],
    },
    {
        title: "Maximum Product Subarray",
        category: "Arrays",
        difficulty: "Medium",
        description: "Given an integer array \"nums\", find a subarra that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer.",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
    },
    {
        title: "Find Minimum in Rotated Sorted Array",
        category: "Arrays",
        difficulty: "Medium",
        description: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    },
    {
        title: "Search in Rotated Sorted Array",
        category: "Arrays",
        difficulty: "Medium",
        description: "There is an integer array \"nums\" sorted in ascending order (with distinct values). Given the array \"nums\" after the possible rotation and an integer \"target\", return the index of \"target\" if it is in \"nums\", or -1 if it is not in \"nums\".",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    },
    {
        title: "3Sum",
        category: "Arrays",
        difficulty: "Medium",
        description: "Given an integer array \"nums\", return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        link: "https://leetcode.com/problems/3sum/",
    },
    {
        title: "Container With Most Water",
        category: "Arrays",
        difficulty: "Medium",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        link: "https://leetcode.com/problems/container-with-most-water/",
    },
    {
        title: "Sum of Two Integers",
        category: "Binary Manipulation",
        difficulty: "Medium",
        description: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
        resources: [],
    },
    {
        title: "Number of 1 Bits",
        category: "Binary Manipulation",
        difficulty: "Easy",
        description: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
        link: "https://leetcode.com/problems/number-of-1-bits/",
        resources: [],
    },
    {
        title: "Counting Bits",
        category: "Binary Manipulation",
        difficulty: "Easy",
        description: "Given an integer \"n\", return an array \"ans\" of length \"n + 1\" such that for each \"i\" (0 <= i <= n), \"ans[i]\" is the number of 1's in the binary representation of i.",
        link: "https://leetcode.com/problems/counting-bits/",
        resources: [],
    },
    {
        title: "Missing Number",
        category: "Binary Manipulation",
        difficulty: "Easy",
        description: "Given an array \"nums\" containing \"n\" distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        link: "https://leetcode.com/problems/missing-number/",
        resources: [],
    },
    {
        title: "Reverse Bits",
        category: "Binary Manipulation",
        difficulty: "Easy",
        description: "Reverse bits of a given 32 bits unsigned integer.",
        link: "https://leetcode.com/problems/reverse-bits/",
        resources: [],
    },
    {
        title: "Climbing Stairs",
        category: "Dynamic Programming",
        difficulty: "Easy",
        description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        link: "https://leetcode.com/problems/climbing-stairs/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=uHAToNgAPaM",
                title: "GOOGLE CODING INTERVIEW QUESTION - CLIMBING STAIRS (LeetCode)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=ZMNRb9TYiQM",
                title: "LeetCode 70. Climbing Stairs - Interview Prep Ep 72"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=qhDXejbprJk",
                title: "LeetCode 70. Climbing Stairs [Algorithm + Code Explained ] Best Solution"
            },
        ],
    },
    {
        title: "Coin Change",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "You are given an integer array \"coins\" representing coins of different denominations and an integer \"amount\" representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
        link: "https://leetcode.com/problems/coin-change/",
        resources: [],
    },
    {
        title: "Longest Increasing Subsequence",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=CE2b_-XfVDk",
                title: "Longest Increasing Subsequence"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=hQikNRWoTFM",
                title: "Leetcode - Longest Increasing Subsequence (Python)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=cjWnW0hdF1Y",
                title: "Longest Increasing Subsequence - Dynamic Programming - Leetcode 300"
            },
        ],
    },
    {
        title: "Longest Common Subsequence",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given two strings \"text1\" and \"text2\", return the length of their longest common subsequence. If there is no common subsequence, return 0.",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Ua0GhsJSlWM",
                title: "Longest Common Subsequence - Dynamic Programming - Leetcode 1143"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=LAKWWDX3sGw",
                title: "Longest common subsequence | Leetcode #1143"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=sSno9rV8Rhg",
                title: "4.9 Longest Common Subsequence (LCS) - Recursion and Dynamic Programming"
            },
        ],
    },
    {
        title: "Word Break",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
        link: "https://leetcode.com/problems/word-break/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=th4OnoGasMU",
                title: "Word Break | Dynamic Programming | Leetcode #139"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=iWenZCZEBIA",
                title: "LeetCode 139. Word Break - Interview Prep Ep 79"
            },
        ],
    },
    {
        title: "Combinatin Sum",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given an array of distinct integers \"nums\" and a target integer \"target\", return the number of possible combinations that add up to \"target.\"",
        link: "https://leetcode.com/problems/combination-sum-iv/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=dw2nMCxG0ik",
                title: "Combination Sum IV - Dynamic Programming - Leetcode 377 - Python"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=90z1w8XSWIU",
                title: "Letcode 377. Combination Sum Combination Sum IV"
            },
        ],
    },
    {
        title: "House Robber",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        link: "https://leetcode.com/problems/house-robber/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=rWAJCfYYOvM",
                title: "House Robber II - Dynamic Programming - Leetcode 213"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=YEEQRP2ZFxk",
                title: "House Robber | Live Coding with Explanation | Leetcode - 198"
            },
        ],
    },
    {
        title: "House Robber II",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        link: "https://leetcode.com/problems/house-robber-ii/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=rWAJCfYYOvM",
                title: "House Robber II - Dynamic Programming - Leetcode 213"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=5bxF0MJ1oM0",
                title: "House Robber II | Live Coding with Explanation | Leetcode - 213"
            },
        ],
    },
    { /* Come back to this, has more complicated description */
        title: "Decode Ways",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given a string s containing only digits, return the number of ways to decode it.",
        link: "https://leetcode.com/problems/decode-ways/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=6aEyTjOwlJU",
                title: "Decode Ways - Dynamic Programming - Leetcode 91 - Python"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=W4rYz-kd-cY",
                title: "Coding Interview Problem - Decode Ways"
            },
        ],
    },
    { /* Come back to this, has more complicated description */
        title: "Unique Paths",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
        link: "https://leetcode.com/problems/unique-paths/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=IlEsdxuD4lY",
                title: "Unique Paths - Dynamic Programming - Leetcode 62"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=rBAxUTqvlQA",
                title: "Unique Paths | Dynamic programming | Leetcode #62"
            },
        ],
    },
    { 
        title: "Jump Game",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
        link: "https://leetcode.com/problems/jump-game/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Yan0cv2cLy8",
                title: "Jump Game - Greedy - Leetcode 55"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Zb4eRjuPHbM",
                title: "LeetCode 55. Jump Game (Algorithm Explained)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=muDPTDrpS28",
                title: "Jump game | Leetcode #55 | Valley peak approach"
            },
        ],
    },
    { 
        title: "Jump Game",
        category: "Dynamic Programming",
        difficulty: "Medium",
        description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
        link: "https://leetcode.com/problems/jump-game/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Yan0cv2cLy8",
                title: "Jump Game - Greedy - Leetcode 55"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Zb4eRjuPHbM",
                title: "LeetCode 55. Jump Game (Algorithm Explained)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=muDPTDrpS28",
                title: "Jump game | Leetcode #55 | Valley peak approach"
            },
        ],
    },
    { 
        title: "Clone Graph",
        category: "Graphs",
        difficulty: "Medium",
        description: "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
        link: "https://leetcode.com/problems/clone-graph/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=mQeF6bN8hMk",
                title: "Clone Graph - Depth First Search - Leetcode 133"
            },
        ],
    },
    { /* Come back */
        title: "Course Schedule",
        category: "Graphs",
        difficulty: "Medium",
        description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
        link: "https://leetcode.com/problems/clone-graph/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=EgI5nU9etnU",
                title: "Course Schedule - Graph Adjacency List - Leetcode 207"
            },
        ],
    },
    { /* Come back */
        title: "Pacific Atlantic Water Flow",
        category: "Graphs",
        difficulty: "Medium",
        description: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c). The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean. Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=krL3r7MY7Dc",
                title: "Pacific Atlantic Water Flow | Live Coding with Explanation | Leetcode - 417"
            },
        ],
    },
    {
        title: "Number of Islands",
        category: "Graphs",
        difficulty: "Medium",
        description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        link: "https://leetcode.com/problems/number-of-islands/",
    },
    {
        title: "Longest Consecutive Sequence",
        category: "Graphs",
        difficulty: "Medium",
        description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=P6RZZMu_maU",
                title: "Leetcode 128 - LONGEST CONSECUTIVE SEQUENCE"
            },
        ],
    },
    {
        title: "Longest Consecutive Sequence",
        category: "Graphs",
        difficulty: "Medium",
        description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=P6RZZMu_maU",
                title: "Leetcode 128 - LONGEST CONSECUTIVE SEQUENCE"
            },
        ],
    },
    {
        title: "Alien Dictionary",
        category: "Graphs",
        difficulty: "Hard",
        description: "(Requires LeetCode Premium)",
        link: "https://leetcode.com/problems/alien-dictionary/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=LA0X_N-dEsg",
                title: "LeetCode 269. Alien Dictionary Explanation and Solution"
            },
        ],
    },
    {
        title: "Graph Valid Tree",
        category: "Graphs",
        difficulty: "Medium",
        description: "(Requires LeetCode Premium)",
        link: "https://leetcode.com/problems/graph-valid-tree/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=PunLNRXcxlQ",
                title: "[Java] Leetcode 261. Graph Valid Tree [Union Find #2]"
            },
        ],
    },
    {
        title: "Number of Connected Components in an Undirected Graph",
        category: "Graphs",
        difficulty: "Medium",
        description: "(Requires LeetCode Premium)",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=8f1XPm4WOUc",
                title: "Number of Connected Components in an Undirected Graph - Union Find - Leetcode 323 - Python"
            },
        ],
    },
    {
        title: "Merge K Sorted Lists",
        category: "Linked Lists",
        difficulty: "Hard",
        description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=kpCesr9VXDA",
                title: "Merge K sorted lists | Leetcode #23"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=3yvecsuv3iQ",
                title: "Merge k Sorted Lists | Live Coding with Explanation | Leetcode - 23"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=ptYUCjfNhJY",
                title: "Merge K Sorted Arrays - Min Heap Algorithm (\"Merge K Sorted Lists\" on LeetCode)"
            },
        ],
    },
]

export default questions;