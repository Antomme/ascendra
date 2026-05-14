package ka.de.ascendra.backend.model;

import jakarta.persistence.*;
import ka.de.ascendra.backend.enums.Status;

import java.time.LocalDate;

@Entity
@Table(name="tasks")
public class Task extends TrackingComponent{

    @Column(name = "priority")
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
