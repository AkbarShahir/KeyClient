   function getProjectPath()
        {
        	var  loc = window.location.toString();
        	var ProjectPath = loc.substring(0,loc.lastIndexOf('/'));
        	return ProjectPath;
        }