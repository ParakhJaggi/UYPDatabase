package UYPDatabase.site.common.guest;

public class GuestDto {
    //guest info
    private String principal;
    private String firstName;
    private String middleInitial;
    private String lastName;
    private String addressLine;
    private String city;
    private String state;
    private String zip;
    private String phoneNumber;
    private String password;
    private String prevSchool;
    private String graduationYear;
    private String expectedSchool;
    private String sibling;
    private String gtAcceptance;

    //guardian 1 info
    private String parentFirstName;
    private String parentLastName;
    private String parentEmail;
    private String parentHomeNumber;
    private String parentWorkNumber;
    private String parentCellNumber;

    //guardian 2 info
    private String parentFirstName2;
    private String parentLastName2;
    private String parentEmail2;
    private String parentHomeNumber2;
    private String parentWorkNumber2;
    private String parentCellNumber2;

    public GuestDto(){

    }

    public GuestDto(String principal, String firstName, String middleInitial, String lastName, String addressLine, String city, String state, String zip, String phoneNumber, String password, String prevSchool, String graduationYear, String expectedSchool, String sibling, String gtAcceptance, String parentFirstName, String parentLastName, String parentEmail, String parentHomeNumber, String parentWorkNumber, String parentCellNumber, String parentFirstName2, String parentLastName2, String parentEmail2, String parentHomeNumber2, String parentWorkNumber2, String parentCellNumber2) {
        this.principal = principal;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.addressLine = addressLine;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.prevSchool = prevSchool;
        this.graduationYear = graduationYear;
        this.expectedSchool = expectedSchool;
        this.sibling = sibling;
        this.gtAcceptance = gtAcceptance;
        this.parentFirstName = parentFirstName;
        this.parentLastName = parentLastName;
        this.parentEmail = parentEmail;
        this.parentHomeNumber = parentHomeNumber;
        this.parentWorkNumber = parentWorkNumber;
        this.parentCellNumber = parentCellNumber;
        this.parentFirstName2 = parentFirstName2;
        this.parentLastName2 = parentLastName2;
        this.parentEmail2 = parentEmail2;
        this.parentHomeNumber2 = parentHomeNumber2;
        this.parentWorkNumber2 = parentWorkNumber2;
        this.parentCellNumber2 = parentCellNumber2;
    }

    public String getPrincipal() {
        return principal;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPrevSchool() {
        return prevSchool;
    }

    public void setPrevSchool(String prevSchool) {
        this.prevSchool = prevSchool;
    }

    public String getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
    }

    public String getExpectedSchool() {
        return expectedSchool;
    }

    public void setExpectedSchool(String expectedSchool) {
        this.expectedSchool = expectedSchool;
    }

    public String getSibling() {
        return sibling;
    }

    public void setSibling(String sibling) {
        this.sibling = sibling;
    }

    public String getGtAcceptance() {
        return gtAcceptance;
    }

    public void setGtAcceptance(String gtAcceptance) {
        this.gtAcceptance = gtAcceptance;
    }

    public String getParentFirstName() {
        return parentFirstName;
    }

    public void setParentFirstName(String parentFirstName) {
        this.parentFirstName = parentFirstName;
    }

    public String getParentLastName() {
        return parentLastName;
    }

    public void setParentLastName(String parentLastName) {
        this.parentLastName = parentLastName;
    }

    public String getParentEmail() {
        return parentEmail;
    }

    public void setParentEmail(String parentEmail) {
        this.parentEmail = parentEmail;
    }

    public String getParentHomeNumber() {
        return parentHomeNumber;
    }

    public void setParentHomeNumber(String parentHomeNumber) {
        this.parentHomeNumber = parentHomeNumber;
    }

    public String getParentWorkNumber() {
        return parentWorkNumber;
    }

    public void setParentWorkNumber(String parentWorkNumber) {
        this.parentWorkNumber = parentWorkNumber;
    }

    public String getParentCellNumber() {
        return parentCellNumber;
    }

    public void setParentCellNumber(String parentCellNumber) {
        this.parentCellNumber = parentCellNumber;
    }

    public String getParentFirstName2() {
        return parentFirstName2;
    }

    public void setParentFirstName2(String parentFirstName2) {
        this.parentFirstName2 = parentFirstName2;
    }

    public String getParentLastName2() {
        return parentLastName2;
    }

    public void setParentLastName2(String parentLastName2) {
        this.parentLastName2 = parentLastName2;
    }

    public String getParentEmail2() {
        return parentEmail2;
    }

    public void setParentEmail2(String parentEmail2) {
        this.parentEmail2 = parentEmail2;
    }

    public String getParentHomeNumber2() {
        return parentHomeNumber2;
    }

    public void setParentHomeNumber2(String parentHomeNumber2) {
        this.parentHomeNumber2 = parentHomeNumber2;
    }

    public String getParentWorkNumber2() {
        return parentWorkNumber2;
    }

    public void setParentWorkNumber2(String parentWorkNumber2) {
        this.parentWorkNumber2 = parentWorkNumber2;
    }

    public String getParentCellNumber2() {
        return parentCellNumber2;
    }

    public void setParentCellNumber2(String parentCellNumber2) {
        this.parentCellNumber2 = parentCellNumber2;
    }

    @Override
    public String toString() {
        return "GuestDto{" +
                "principal='" + principal + '\'' +
                ", firstName='" + firstName + '\'' +
                ", middleInitial='" + middleInitial + '\'' +
                ", lastName='" + lastName + '\'' +
                ", addressLine='" + addressLine + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", password='" + password + '\'' +
                ", prevSchool='" + prevSchool + '\'' +
                ", graduationYear='" + graduationYear + '\'' +
                ", expectedSchool='" + expectedSchool + '\'' +
                ", sibling='" + sibling + '\'' +
                ", gtAcceptance='" + gtAcceptance + '\'' +
                ", parentFirstName='" + parentFirstName + '\'' +
                ", parentLastName='" + parentLastName + '\'' +
                ", parentEmail='" + parentEmail + '\'' +
                ", parentHomeNumber='" + parentHomeNumber + '\'' +
                ", parentWorkNumber='" + parentWorkNumber + '\'' +
                ", parentCellNumber='" + parentCellNumber + '\'' +
                ", parentFirstName2='" + parentFirstName2 + '\'' +
                ", parentLastName2='" + parentLastName2 + '\'' +
                ", parentEmail2='" + parentEmail2 + '\'' +
                ", parentHomeNumber2='" + parentHomeNumber2 + '\'' +
                ", parentWorkNumber2='" + parentWorkNumber2 + '\'' +
                ", parentCellNumber2='" + parentCellNumber2 + '\'' +
                '}';
    }
}
