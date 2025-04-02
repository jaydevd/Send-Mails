
initializeDbConnection()
    .then(() => {
        console.log("Database connected");
        scheduleWithCrone(); //schdule email sending with cron
    })
    .catch((err) => {
        console.log(err);
    });