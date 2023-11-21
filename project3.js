/******w*************

    Project 3
    Name: Man Wawh Li
    Date: April 22, 2022
    Description:

********************/

const fields = ["fullname", "phone", "email", "comment"];

/*
 * Handles the submit event of the form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e)
{
	hideErrors();

	result = formHasErrors()

	if(result)
	{
		e.preventDefault();

		return false;
	}

	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e)
{
	if ( confirm('Clear form?') )
	{
		hideErrors();

		document.getElementById("fullname").focus();

		return true;
	}

	e.preventDefault();

	return false;
}

/*
 * Checks if input fields have errors.
 */
function formHasErrors()
{
	let errorFlag = false;
	let regName = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);
	let regPhone = new RegExp(/^\d{10}$/);
	let regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	let regex = [regName, regPhone, regEmail];

	for (let i = 0; i < fields.length; i++)
	{
		let input = document.getElementById(fields[i]);

		if (trim(input.value) == "" || input.value == null)
		{
			document.getElementById(fields[i] + "_error").style.display = "block";

			if(!errorFlag)
			{
				input.focus();
				input.select();

				errorFlag = true;
			}
		}
		else if (i < regex.length)
		{
			if (!regex[i].test(input.value))
			{
				document.getElementById(fields[i] + "format_error").style.display = "block";

				if(!errorFlag)
				{
					input.focus();
					input.select();

					errorFlag = true;
				}
			}
		}
	}

	return errorFlag;
}


/*
 * Hides all of the error elements.
 */
function hideErrors()
{
	let error = document.getElementsByClassName("error");

	for ( let i = 0; i < error.length; i++ )
	{
		error[i].style.display = "none";
	}
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str)
{
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Handles the load event of the document.
 */
function load()
{
	hideErrors();

	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("reset").addEventListener("click", resetForm);
	document.getElementById("copywrite").innerHTML = "Copywrong &copy " + new Date().getFullYear();
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);