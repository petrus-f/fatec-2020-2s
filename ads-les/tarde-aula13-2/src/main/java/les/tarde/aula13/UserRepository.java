package les.tarde.aula13;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query("SELECT u FROM User u WHERE u.username = :username")
	User getUsersByUserName(@Param("username") String username);

}
