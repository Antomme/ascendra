package ka.de.ascendra.backend.model;

import jakarta.persistence.*;
import ka.de.ascendra.backend.enums.Status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="goals")
public class Goal extends TrackingComponent {

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(
            name = "goal_milestones",
            joinColumns = @JoinColumn(name = "goal_id"),
            inverseJoinColumns = @JoinColumn(name = "milestone_id")
    )
    private List<Milestone> milestones;

    public Goal(Long id, String name, String description, LocalDate startDate, LocalDate endDate, Status status) {
        super(id, name, description, startDate, endDate, status);
        this.milestones = new ArrayList<>();
    }

    public void addMilestone(Milestone milestone){
        this.milestones.add(milestone);
    }

    public void addMilestones(ArrayList<Milestone> milestones){
        this.milestones.addAll(milestones);
    }

    public void removeMilestone(Milestone milestoneToBeRemoved){
        this.milestones.remove(milestoneToBeRemoved);
    }

    public void removeMilestones(ArrayList<Milestone> milestonesToBeRemoved){
        this.milestones.removeAll(milestonesToBeRemoved);
    }

    public List<Milestone> getMilestones() {
        return milestones;
    }
}
