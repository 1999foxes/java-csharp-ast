function levenshteinDistance(s1, s2) {
    const dis = [];
    for (let i = 0; i <= s1.length; i++)
        dis[i] = [];

    for (let i = 0; i <= s1.length; i++)
        dis[i][0] = i;
    for (let j = 0; j <= s2.length; j++)
        dis[0][j] = j;
    for (let j = 1; j <= s2.length; j++) {
        for (let i = 1; i <= s1.length; i++) {
            dis[i][j] = Math.min(
                dis[i - 1][j] + 1,
                dis[i][j - 1] + 1,
                dis[i - 1][j - 1] + (s1.charAt(i - 1) !== s2.charAt(j - 1)),
            );
        }
    }
    return dis[s1.length][s2.length];
}

export { levenshteinDistance, };