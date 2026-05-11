const levels = new Map();

levels.set(1, {
    speed: 3000,
    limitScore: 6,
    time: 30,
    antiTargetCount: 1,
});
levels.set(2, {
    speed: 2000,
    limitScore: 8,
    time: 20,
    antiTargetCount: 2,
});
levels.set(3, {
    speed: 1500,
    limitScore: 13,
    time: 60,
    antiTargetCount: 3,
});
levels.set(4, {
    speed: 1000,
    limitScore: 15,
    time: 60,
    antiTargetCount: 4,
});
levels.set(5, {
    speed: 800,
    limitScore: 20,
    time: 45,
    antiTargetCount: 5,
});
levels.set(6, {
    speed: 600,
    limitScore: 15,
    time: 25,
    antiTargetCount: 6,
});
levels.set(7, {
    speed: 400,
    limitScore: 1,
    time: 60,
    antiTargetCount: 7,
});

export default levels;
