package UYPDatabase.site.common.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import UYPDatabase.site.common.guest.GuestDto;
import alloy.util.Momento;


public class UserDto extends GuestDto {
    private String yearAccepted;
    private String gradeAccepted;
    private String status;
    private String hasGrant;
    private String whichGrant;
    private String mentorName;

    private String disability;
    private String healthConditions;
    private String english;

    private String cleaningHouseInfo;
    private String otherInfo;

    private String userType;
    private String username;

    private String authorizedPerson;

    //either admin default
    UserDto(){
        System.out.println("Creating a UserDto");
    }

    public UserDto(String yearAccepted, String gradeAccepted, String status, String hasGrant, String whichGrant, String mentorName, String disability, String healthConditions, String english, String cleaningHouseInfo, String otherInfo, String userType, String username, String authorizedPerson) {
        this.yearAccepted = yearAccepted;
        this.gradeAccepted = gradeAccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whichGrant = whichGrant;
        this.mentorName = mentorName;
        this.disability = disability;
        this.healthConditions = healthConditions;
        this.english = english;
        this.cleaningHouseInfo = cleaningHouseInfo;
        this.otherInfo = otherInfo;
        this.userType = userType;
        this.username = username;
        this.authorizedPerson = authorizedPerson;
    }

    public UserDto(String yearAccepted, String gradeAccepted, String status, String hasGrant, String whichGrant, String mentorName, String disability, String healthConditions, String english, String cleaningHouseInfo, String otherInfo, String userType, String username) {
        this.yearAccepted = yearAccepted;
        this.gradeAccepted = gradeAccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whichGrant = whichGrant;
        this.mentorName = mentorName;
        this.disability = disability;
        this.healthConditions = healthConditions;
        this.english = english;
        this.cleaningHouseInfo = cleaningHouseInfo;
        this.otherInfo = otherInfo;
        this.userType = userType;
        this.username = username;
    }

    public UserDto(String principal, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String suffix, String preferredName, String birthday, String gender, String ethnicity, String grade, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2, String yearAccepted, String gradeAccepted, String status, String hasGrant, String whichGrant, String mentorName, String disability, String healthConditions, String english, String cleaningHouseInfo, String otherInfo, String userType, String username, String authorizedPerson) {
        super(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2);
        this.yearAccepted = yearAccepted;
        this.gradeAccepted = gradeAccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whichGrant = whichGrant;
        this.mentorName = mentorName;
        this.disability = disability;
        this.healthConditions = healthConditions;
        this.english = english;
        this.cleaningHouseInfo = cleaningHouseInfo;
        this.otherInfo = otherInfo;
        this.userType = userType;
        this.username = username;
        this.authorizedPerson = authorizedPerson;
    }

    public UserDto(String principal, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String suffix, String preferredName, String birthday, String gender, String ethnicity, String grade, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2, String yearAccepted, String gradeAccepted, String status, String hasGrant, String whichGrant, String mentorName, String disability, String healthConditions, String english, String cleaningHouseInfo, String otherInfo, String userType, String username) {
        super(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2);
        this.yearAccepted = yearAccepted;
        this.gradeAccepted = gradeAccepted;
        this.status = status;
        this.hasGrant = hasGrant;
        this.whichGrant = whichGrant;
        this.mentorName = mentorName;
        this.disability = disability;
        this.healthConditions = healthConditions;
        this.english = english;
        this.cleaningHouseInfo = cleaningHouseInfo;
        this.otherInfo = otherInfo;
        this.userType = userType;
        this.username = username;
    }

    public UserDto(String principal, String username, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String suffix, String preferredName, String birthday, String gender, String ethnicity, String grade, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2, String disability, String userType) {
        super(principal, firstName, middleInitial, lastName, addressLine, city, state, zip, phoneNumber, password, prevSchool, graduationYear, expectedSchool, sibling, gtAcceptance, suffix, preferredName, birthday, gender, ethnicity, grade, parentFirstName, parentLastName, parentEmail, parentHomeNumber, parentWorkNumber, parentCellNumber, parentFirstName2, parentLastName2, parentEmail2, parentHomeNumber2, parentWorkNumber2, parentCellNumber2);
        this.disability = disability;
        this.userType = userType;
        this.username = username;
    }

    public String getYearAccepted() {
        return yearAccepted;
    }

    public void setYearAccepted(String yearAccepted) {
        this.yearAccepted = yearAccepted;
    }

    public String getGradeAccepted() {
        return gradeAccepted;
    }

    public void setGradeAccepted(String gradeAccepted) {
        this.gradeAccepted = gradeAccepted;
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

    public String getWhichGrant() {
        return whichGrant;
    }

    public void setWhichGrant(String whichGrant) {
        this.whichGrant = whichGrant;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public String getDisability() {
        return disability;
    }

    public void setDisability(String disability) {
        this.disability = disability;
    }

    public String getHealthConditions() {
        return healthConditions;
    }

    public void setHealthConditions(String healthConditions) {
        this.healthConditions = healthConditions;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getCleaningHouseInfo() {
        return cleaningHouseInfo;
    }

    public void setCleaningHouseInfo(String cleaningHouseInfo) {
        this.cleaningHouseInfo = cleaningHouseInfo;
    }

    public String getOtherInfo() {
        return otherInfo;
    }

    public void setOtherInfo(String otherInfo) {
        this.otherInfo = otherInfo;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public void setUsername(String username) {
        this.username = username;
    }

    public String getAuthorizedPerson() {
        return authorizedPerson;
    }

    public void setAuthorizedPerson(String authorizedPerson) {
        this.authorizedPerson = authorizedPerson;
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