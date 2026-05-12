package ka.de.ascendra.backend.respository;

import ka.de.ascendra.backend.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}
