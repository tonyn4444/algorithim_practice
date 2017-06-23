var meetingTimes =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

function mergeMeetingTimes(arr) {
	var sortedTimes = arr.slice().sort(function(a, b) {
		return a.startTime - b.startTime;
	});
	
	var mergedMeetingTimes = [arr[0]];

	for (var i = 1; i < arr.length; i++) {
		var currentMeetingTime = arr[i];
		var previousMeetingTime = mergedMeetingTimes[mergedMeetingTimes.length - 1];
		console.log(mergedMeetingTimes);
		if (previousMeetingTime.endTime >= currentMeetingTime.startTime) {
			previousMeetingTime.endTime = Math.max(previousMeetingTime.endTime, currentMeetingTime.endTime);
		} else {
			mergedMeetingTimes.push(currentMeetingTime);
		}
	}
	return mergedMeetingTimes;
}

mergeMeetingTimes(meetingTimes);



