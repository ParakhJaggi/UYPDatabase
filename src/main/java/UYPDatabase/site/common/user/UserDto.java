package UYPDatabase.site.common.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import UYPDatabase.site.common.guest.GuestDto;
import alloy.util.Momento;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class UserDto extends GuestDto {

    //either admin default
    private String userType;

    UserDto(){
        super();
    }

    public UserDto(String userType) {
        this.userType = userType;
    }

    public UserDto(String principal, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2, String userType) {
        super(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2);
        this.userType = userType;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userType='" + userType + '\'' +
                '}';
    }
}