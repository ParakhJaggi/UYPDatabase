package UYPDatabase.site.common.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import UYPDatabase.site.common.guest.GuestDto;
import alloy.util.Momento;


public class UserDto extends GuestDto {
    private String yearaccepted;
    private String status;
    private String hasGrant;
    private String whatgrant;
    private String mentorname;
    private String healthconditions;



    private String english;
    private String gt;
    private String cleaninghouseinfo;
    private String otherinfo;
    private String disability;
    private String userType;
    private String username;

    //either admin default
    UserDto(){
        System.out.println("Creating a UserDto");;
    }

    public UserDto(String disability, String userType, String yearaccepted,String status,String hasGrant,String whatgrant,String mentorname, String healthconditions,String english,String gt,String cleaninghouseinfo,String otherinfo) {
        this.disability = disability;
        this.userType = userType;
        this.yearaccepted = yearaccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whatgrant = whatgrant;
        this.mentorname = mentorname;
        this.healthconditions = healthconditions;
        this.english = english;
        this.gt = gt;
        this.cleaninghouseinfo  =cleaninghouseinfo;
        this.otherinfo = otherinfo;
    }



    public UserDto(String principal, String username, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String suffix, String preferredName, String birthday, String gender, String ethnicity, String grade, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2, String disability, String userType, String yearaccepted,String status,String hasGrant,String whatgrant,String mentorname, String healthconditions,String english,String gt,String cleaninghouseinfo,String otherinfo) {
        super(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2);
        this.disability = disability;
        this.userType = userType;
        this.username = username;
        this.yearaccepted = yearaccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whatgrant = whatgrant;
        this.mentorname = mentorname;
        this.healthconditions = healthconditions;
        this.english = english;
        this.gt = gt;
        this.cleaninghouseinfo  =cleaninghouseinfo;
        this.otherinfo = otherinfo;



    }

    public String getDisability() {
        return disability;
    }

    public void setDisability(String disability) {
        this.disability = disability;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getYearaccepted() {
        return yearaccepted;
    }

    public void setYearaccepted(String yearaccepted) {
        this.yearaccepted = yearaccepted;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHasGrant() {
        return hasGrant;
    }

    public void setHasGrant(String hasGrant) {
        this.hasGrant = hasGrant;
    }

    public String getWhatgrant() {
        return whatgrant;
    }

    public void setWhatgrant(String whatgrant) {
        this.whatgrant = whatgrant;
    }

    public String getMentorname() {
        return mentorname;
    }

    public void setMentorname(String mentorname) {
        this.mentorname = mentorname;
    }

    public String getHealthconditions() {
        return healthconditions;
    }

    public void setHealthconditions(String healthconditions) {
        this.healthconditions = healthconditions;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getGt() {
        return gt;
    }

    public void setGt(String gt) {
        this.gt = gt;
    }

    public String getCleaninghouseinfo() {
        return cleaninghouseinfo;
    }

    public void setCleaninghouseinfo(String cleaninghouseinfo) {
        this.cleaninghouseinfo = cleaninghouseinfo;
    }

    public String getOtherinfo() {
        return otherinfo;
    }

    public void setOtherinfo(String otherinfo) {
        this.otherinfo = otherinfo;
    }

    @Override
    public String toString() {
        return "GuestDto{" +
                "principal='" + getPrincipal() + '\'' +
                ", zip='" + getZip() + '\'' +
                ", grade='" + getGrade() + '\'' +
                ", parentEmail='" + getParentEmail() + '\'' +
                ", username='" + this.getUsername() + '\'' +

                '}';
    }
}