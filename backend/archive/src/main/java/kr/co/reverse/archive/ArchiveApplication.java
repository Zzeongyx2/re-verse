package kr.co.reverse.archive;

// import kr.co.reverse.archive.db.repository.UserSearchRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

// @EnableAsync
// @EnableJpaRepositories(excludeFilters = @ComponentScan.Filter(
// 		type = FilterType.ASSIGNABLE_TYPE, classes = UserSearchRepository.class))
@SpringBootApplication
public class ArchiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArchiveApplication.class, args);
	}

	static {
		System.setProperty("com.amazonaws.sdk.disableEc2Metadata", "true");
	}


}
