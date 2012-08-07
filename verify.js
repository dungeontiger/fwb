var aPostal = [
				"K0E1B0",
				"K0E1P0",
				"K0G1R0",
				"K0E1E0",
				"K0E1X0",
				"K0E1A0",
				"K6T1A1",
				"K6T1A2",
				"K6T1A3",
				"K6T1A4",
				"K6T1A5",
				"K6T1A6",
				"K6T1A7",
				"K6T1A8",
				"K6T1A9",
				"K6T1B1",
				"K6T1B2",
				"K6T1B4",
				"K0E1H0",
				"K0E1M0",
				"K6T1B3",
				"K6T1B5",
				"K6T1B7",
				"K0E1Y0",
				"K0E1R0",
				"K0E1L0",
				"K0E1N0",
				"K0E1V0",
				"K0H2N0",
				"K0G1J0",
				"K0G1S0",
				"K0G1T0",
				"K0E1G0",
				"K0G1E0",
				"N0J1N0",
				"K0G1L0",
				"K0G1P0",
				"K0G1V0"
				]


function verify(theForm)
{
	if (!theForm.Parent_Name.value || !theForm.Address.value || !theForm.Town.value || !theForm.Province.value || !theForm.Postal_Code.value || !theForm.Phone.value || !theForm.EMail.value)
	{
		alert("Your application is not complete.  Please fill out your name and address fully.");
		return false;
	}
	
	var lowerProvince = theForm.Province.value.toLowerCase();
	
	if (lowerProvince != "on" && lowerProvince != "ont" && lowerProvince != "ontario")
	{
		alert("The address for delivery must be in Leeds and Grenville county, Ontario, you entered '" + theForm.Province.value + "' for the province.");
		return false;
	}
	
	var bFound = false;
	var sEnteredPostal = theForm.Postal_Code.value.toUpperCase().replace(" ", "");
	for (var i = 0; i < aPostal.length; i++)
	{
		if (sEnteredPostal == aPostal[i])
		{
			bFound = true;
			break;
		}
	}
	
	if (!bFound)
	{
		return confirm("It appears that the postal code you entered (" + theForm.Postal_Code.value + ") is not in Leeds Grenville.  You must be in Leeds Grenville to participate in tis program.  Do you want to submit your application anyway?");
	}
	
	return true;
}
