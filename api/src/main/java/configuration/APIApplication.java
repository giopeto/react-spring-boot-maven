package configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@SpringBootApplication
@Import({ControllerConfig.class, CacheConfig.class, ServiceConfig.class})
public class APIApplication {

	public static void main(String[]args) {
		SpringApplication.run(APIApplication.class, args);
	}
}
