package UYPDatabase.site.common.AllDto;

import java.util.ArrayList;

public class UserNameListDto {
    private ArrayList<String> usernameList;

    public UserNameListDto(){
        usernameList = new ArrayList<>();
    }

    public UserNameListDto(ArrayList<String> usernameList) {
        this.usernameList = usernameList;
    }

    public ArrayList<String> getUsernameList() {
        return usernameList;
    }

    public void setUsernameList(ArrayList<String> usernameList) {
        this.usernameList = usernameList;
    }

    @Override
    public String toString() {
        return "UserNameListDto{" +
                "usernameList=" + usernameList +
                '}';
    }
}
