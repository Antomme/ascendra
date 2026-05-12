package ka.de.ascendra.backend.model;

import ka.de.ascendra.backend.enums.Status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Milestone extends TrackingComponent {

    private List<Task> tasks;

    public Milestone(Long id, String name, String description, LocalDate startDate, LocalDate endDate, Status status) {
        super(id, name, description, startDate, endDate, status);
        this.tasks = new ArrayList<>();
    }

    public void addTask(Task milestone){
        this.tasks.add(milestone);
    }

    public void addTasks(ArrayList<Task> milestones){
        this.tasks.addAll(milestones);
    }

    public void removeTask(Task milestoneToBeRemoved){
        this.tasks.remove(milestoneToBeRemoved);
    }

    public void removeTask(ArrayList<Task> milestonesToBeRemoved){
        this.tasks.removeAll(milestonesToBeRemoved);
    }

    public List<Task> getTasks() {
        return tasks;
    }
}
