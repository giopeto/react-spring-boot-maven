package controllers;

import domain.Item;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Arrays.asList;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemsController {

	@RequestMapping(method = GET, headers = "Accept=application/json", produces = "application/json")
	public List get() {
		return asList(new Item(1, "Item 1"), new Item(2, "Item 2"));
	}
}
