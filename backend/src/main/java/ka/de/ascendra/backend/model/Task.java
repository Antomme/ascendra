package ka.de.ascendra.backend.model;

import ka.de.ascendra.backend.enums.Status;

import java.time.LocalDate;

public class Task extends TrackingComponent{

    private int priority;

    public Task(Long id, String name, String description, LocalDate startDate, LocalDate endDate, Status status) {
        super(id, name, description, startDate, endDate, status);
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
