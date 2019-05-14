const IsUserLoggedIn = "failure";
export default function(state = IsUserLoggedIn, action){  
      switch (action.type) {
        case "CLICKED_LOGIN":
            return action.payload;
        }
        return state;
 }


