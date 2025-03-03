const analyzeUsers = (users) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const activeUsers = users.filter(user =>
        user.posts.some(post => new Date(post.timestamp) > oneWeekAgo)
    );

    const popularPosts = activeUsers.flatMap(user =>
        user.posts.filter(post => post.likes >= 10 && new Date(post.timestamp) > oneWeekAgo)
    );

    const averageLikes = activeUsers.length 
        ? popularPosts.reduce((sum, post) => sum + post.likes, 0) / activeUsers.length 
        : 0;

    return {
        activeUsers: activeUsers.length,
        popularPosts: popularPosts.length,
        avgLikes: averageLikes.toFixed(2)
    };
};

console.log(analyzeUsers(users));
