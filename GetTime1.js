function GetTime()
{
	var hour = new Date().getHours();

	if		(hour >= 5 && hour < 12)	return "Доброе утро!"; 
	else if	(hour >= 12 && hour < 18)	return "Добрый день!";
	else if	(hour >= 18 && hour < 24)	return "Добрый вечер!";
	else if	(hour >= 24 && hour < 5)	return "Доброй ночи!";
	
}
GetTime()