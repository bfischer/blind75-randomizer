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
        title: "Insert Interval",
        category: "Intervals",
        difficulty: "Medium",
        description: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.",
        link: "https://leetcode.com/problems/insert-interval/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=NWM4e4yda0w",
                title: "insert interval | insert interval leetcode | leetcode 57 | array"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=K7B9ZTKoRpQ",
                title: "[Java] Leetcode 57. Insert Interval [Intervals #2]"
            },
        ],
    },
    {
        title: "Merge Intervals",
        category: "Intervals",
        difficulty: "Medium",
        description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        link: "https://leetcode.com/problems/merge-intervals/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=qKczfGUrFY4",
                title: "LeetCode 56. Merge Intervals (Algorithm Explained)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=iT9_MU2L3H0",
                title: "Leetcode - Merge Intervals (Python)"
            },
        ],
    },
    {
        title: "Non-overlapping Intervals",
        category: "Intervals",
        difficulty: "Medium",
        description: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=BTObFnHbD4U",
                title: "Non overlapping intervals | Leetcode #435"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=2NN6N-tNyag",
                title: "[Java] Leetcode 435. Non-overlapping Intervals [Intervals #3]"
            },
        ],
    },
    {
        title: "Meeting Rooms",
        category: "Intervals",
        difficulty: "Easy",
        description: "(Requires LeetCode Premium)",
        link: "https://leetcode.com/problems/meeting-rooms/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=PaJxqZVPhbg",
                title: "Free Leetcode Premium Questions - Meeting Rooms - Leetcode 252 - Python"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=PWgFnSygweI",
                title: "FACEBOOK CODING INTERVIEW QUESTION - MEETING ROOMS II (LeetCode)"
            },
        ],
    },
    {
        title: "Meeting Rooms II",
        category: "Intervals",
        difficulty: "Medium",
        description: "(Requires LeetCode Premium)",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=PWgFnSygweI",
                title: "FACEBOOK CODING INTERVIEW QUESTION - MEETING ROOMS II (LeetCode)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=kZfHnsrQcP0",
                title: "Leetcode 253. Meeting Rooms II [Algo + Code + Time/Space Complexity]"
            },
        ],
    },
    {
        title: "Reverse Linked List",
        category: "Linked Lists",
        difficulty: "Easy",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        link: "https://leetcode.com/problems/reverse-linked-list/",
    },
    {
        title: "Linked List Cycle",
        category: "Linked Lists",
        difficulty: "Easy",
        description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
        link: "https://leetcode.com/problems/linked-list-cycle/",
    },
    {
        title: "Merge Two Sorted Lists",
        category: "Linked Lists",
        difficulty: "Easy",
        description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
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
    {
        title: "Remove Nth Node From End of List",
        category: "Linked Lists",
        difficulty: "Medium",
        description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=XtYEEvrhemI",
                title: "LeetCode Remove Nth Node From End of List Solution Explained - Java"
            },
        ],
    },
    {
        title: "Remove Nth Node From End of List",
        category: "Linked Lists",
        difficulty: "Medium",
        description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=XtYEEvrhemI",
                title: "LeetCode Remove Nth Node From End of List Solution Explained - Java"
            },
        ],
    },
    {
        title: "Reorder List",
        category: "Linked Lists",
        difficulty: "Medium",
        description: "You are given the head of a singly linked-list: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed.",
        link: "https://leetcode.com/problems/reorder-list/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=xRYPjDMSUFw",
                title: "LeetCode Reorder List Solution Explained - Java"
            },
        ],
    },
    {
        title: "Set Matrix Zeros",
        category: "Matrix",
        difficulty: "Medium",
        description: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
    },
    {
        title: "Spiral Matrix",
        category: "Matrix",
        difficulty: "Medium",
        description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
        link: "https://leetcode.com/problems/spiral-matrix/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=BJnMZNwUk1M",
                title: "Spiral Matrix - Microsoft Interview Question - Leetcode 54"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=3joo9yAZVh8",
                title: "LeetCode Spiral Matrix Solution Explained - Java"
            },
        ],
    },
    {
        title: "Rotate Image",
        category: "Matrix",
        difficulty: "Medium",
        description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
        link: "https://leetcode.com/problems/rotate-image/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=SA867FvqHrM",
                title: "LeetCode 48. Rotate Image (Solution Explained)"
            },
        ],
    },
    {
        title: "Word Search",
        category: "Matrix",
        difficulty: "Medium",
        description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
        link: "https://leetcode.com/problems/word-search/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=m9TrOL1ETxI",
                title: "LeetCode Word Search Solution Explained - Java"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=mXWKVqGcL1M",
                title: "word search | word search leetcode | leetcode 79 | backtracking | dfs"
            },
        ],
    },
    {
        title: "Longest Substring Without Repeating Characters",
        category: "Strings",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=3IETreEybaA",
                title: "LeetCode Longest Substring Without Repeating Characters Solution Explained - Java"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=RqxIXM6eyiY",
                title: "Leetcode 3. Longest Substring Without Repeating Characters"
            },
        ],
    },
    {
        title: "Longest Repeating Character Replacement",
        category: "Strings",
        difficulty: "Medium",
        description: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=00FmUN1pkGE",
                title: "LeetCode Longest Repeating Character Replacement Solution Explained - Java"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=EF_6AOeHuBI",
                title: "[Java] Leetcode 424. Longest Repeating Character Replacement [Sliding Window #6]"
            },
        ],
    },
    {
        title: "Minimum Window Substring",
        category: "Strings",
        difficulty: "Hard",
        description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string The testcases will be generated such that the answer is unique.",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=jSto0O4AJbM",
                title: "Minimum Window Substring - Airbnb Interview Question - Leetcode 76"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=CX6_L9GLldU",
                title: "Leetcode - Minimum Window Substring (Python)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=eS6PZLjoaq8",
                title: "Minimum Window Substring: Utilizing Two Pointers & Tracking Character Mappings With A Hashtable"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=0GOyCIJ2ajQ",
                title: "Coding Interview Tutorial 25: Minimum Window Substring [LeetCode]"
            },
        ],
    },
    {
        title: "Valid Anagram",
        category: "Strings",
        difficulty: "Easy",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        link: "https://leetcode.com/problems/valid-anagram/",
    },
    {
        title: "Group Anagrams",
        category: "Strings",
        difficulty: "Medium",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        link: "https://leetcode.com/problems/group-anagrams/",
    },
    {
        title: "Valid Parenthesis",
        category: "Strings",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
        link: "https://leetcode.com/problems/valid-parentheses/",
    },
    {
        title: "Valid Palindrome",
        category: "Strings",
        difficulty: "Easy",
        description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
        link: "https://leetcode.com/problems/valid-palindrome/",
    },
    {
        title: "Longest Palindromic Substring",
        category: "Strings",
        difficulty: "Medium",
        description: "Given a string s, return the longest palindromic substring in s.",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=y2BD4MJqV20",
                title: "LeetCode 5. Longest Palindromic Substring (Algorithm Explained)"
            },
        ],
    },
    {
        title: "Palindromic Substrings",
        category: "Strings",
        difficulty: "Medium",
        description: "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.",
        link: "https://leetcode.com/problems/palindromic-substrings/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=EIf9zFqufbU",
                title: "Leetcode Visualized: 647. Palindromic Substrings"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=biHfMygdoCE",
                title: "#Leetcode 647. Palindromic Substrings | Count distinct palindromic substrings in a string"
            },
        ],
    },
    {
        title: "Encode and Decode Strings",
        category: "Strings",
        difficulty: "Medium",
        description: "(Required LeetCode Premium)",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=pdRZrjlqSbs",
                title: "[Java] Leetcode 271. Encode and Decode Strings [String #4]"
            },
        ],
    },
    {
        title: "Encode and Decode Strings",
        category: "Strings",
        difficulty: "Medium",
        description: "(Required LeetCode Premium)",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=pdRZrjlqSbs",
                title: "[Java] Leetcode 271. Encode and Decode Strings [String #4]"
            },
        ],
    },
    {
        title: "Maximum Depth of Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    },
    {
        title: "Same Tree",
        category: "Tree",
        difficulty: "Easy",
        description: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
        link: "https://leetcode.com/problems/same-tree/",
    },
    {
        title: "Invert Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        description: "Given the root of a binary tree, invert the tree, and return its root.",
        link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
        title: "Binary Tree Maximum Path Sum",
        category: "Tree",
        difficulty: "Hard",
        description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Hr5cWUld4vU",
                title: "Binary Tree Maximum Path Sum - DFS - Leetcode 124 - Python"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=TO5zsKtc1Ic",
                title: "Binary tree maximum path sum | Leetcode #124"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=mOdetMWwtoI",
                title: "LeetCode 124. Binary Tree Maximum Path Sum (Algorithm Explained)"
            },
        ],
    },
    {
        title: "Binary Tree Level Order Traversal",
        category: "Tree",
        difficulty: "Medium",
        description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=vQrggrFMyp8",
                title: "Binary Tree Level Order Traversal | Live Coding with Explanation | Leetcode - 102"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=6ZnyEApgFYg",
                title: "Binary Tree Level Order Traversal - BFS - Leetcode 102"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=kI5L2s_tKMY",
                title: "HackerRank Tree: Level Order Traversal Solution Explained - Java"
            },
        ],
    },
    { /* Come back */
        title: "Serialize and Deserialize Binary Tree",
        category: "Tree",
        difficulty: "Hard",
        description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=u4JAi2JJhI8",
                title: "Serialize and Deserialize Binary Tree - Preorder Traversal - Leetcode 297 - Python"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Qtf8ieq3zco",
                title: "Serialize and Deserialize a Binary Tree | Leetcode #297"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=NoHwJP7xPxg",
                title: "[Java] Leetcode 297. Serialize and Deserialize Binary Tree [Binary Tree #9]"
            },
        ],
    },
    {
        title: "Subtree of Another Tree",
        category: "Tree",
        difficulty: "Easy",
        description: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
    },
    {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        category: "Tree",
        difficulty: "Medium",
        description: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=GeltTz3Z1rw",
                title: "LeetCode 105. Construct Binary Tree from Preorder and Inorder Traversal (Algorithm Explained)"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=4u9oblkt_jA",
                title: "construct binary tree from preorder and inorder traversal leetcode | leetcode 105 | binary tree"
            },
        ],
    },
    {
        title: "Validate Binary Search Tree",
        category: "Tree",
        difficulty: "Medium",
        description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=gGsEVFP0aQo",
                title: "LeetCode 98. Validate Binary Search Tree (Algorithm Explained)"
            },
        ],
    },
    {
        title: "Kth Smallest Element in a BST",
        category: "Tree",
        difficulty: "Medium",
        description: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=5LUXSvjmGCw",
                title: "Kth Smallest Element in a BST"
            },
        ],
    },
    {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        category: "Tree",
        difficulty: "Medium",
        description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=6POfA8fruxI",
                title: "LeetCode 235. Lowest Common Ancestor of a Binary Search Tree (Algorithm Explained)"
            },
        ],
    },
    {
        title: "Implement Trie (Prefix Tree)",
        category: "Tree",
        difficulty: "Medium",
        description: "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=xqsaAhQC6c8",
                title: "Implement TRIE | Leetcode #208"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=oobqoCJlHA0",
                title: "Implement Trie (Prefix Tree) - Leetcode 208"
            },
        ],
    },
    {
        title: "Design Add and Search Words Data Structure",
        category: "Tree",
        difficulty: "Medium",
        description: "Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class.",
        link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=uI-dOlmUSL8",
                title: "Design Add and Search Words Data Structure - Leetcode - 211"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=BTf05gs_8iU",
                title: "Design Add and Search Words Data Structure - Leetcode 211 - Python"
            },
        ],
    },
    {
        title: "Word Search II",
        category: "Tree",
        difficulty: "Hard",
        description: "Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
        link: "https://leetcode.com/problems/word-search-ii/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=EmvsBM7o-5k",
                title: "Word Search II | DFS + Map | DFS + TRIE | Leetcode #212"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=IryjR5DteW4",
                title: "[Java] Leetcode 212. Word Search II [Backtracking #12]"
            },
        ],
    },
    {
        title: "Merge K Sorted Lists",
        category: "Heap",
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
    {
        title: "Merge K Sorted Lists",
        category: "Heap",
        difficulty: "Medium",
        description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=Wh3A29psE_Y",
                title: "Top K Frequent Elements | Leetcode #347 | Heap | Hashmap"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=cupg2TGIkyM",
                title: "Top K Frequent Words - Priority Queue Approach (LeetCode)"
            },
        ],
    },
    {
        title: "Find Median from Data Stream",
        category: "Heap",
        difficulty: "Hard",
        description: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. For example, for arr = [2,3,4], the median is 3. For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5. Implement the MedianFinder class.",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
        resources: [
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=itmhHWaHupI",
                title: "Find Median from Data Stream - Heap & Priority Queue - Leetcode 295"
            },
            {
                resourceType: "video",
                link: "https://www.youtube.com/watch?v=TzkPMVoIgWM",
                title: "LeetCode 295. Find Median from Data Stream Explanation and Solution"
            },
        ],
    },
]

export default questions;