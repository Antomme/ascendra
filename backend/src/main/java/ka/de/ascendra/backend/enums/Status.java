package ka.de.ascendra.backend.enums;

public enum Status {
    BACKLOG("Backlog"),
    TODO("ToDo"),
    WORK_IN_PROGRESS("Work in progress"),
    TEST("Testing"),
    DONE("Done");

    private final String name;

    Status(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
