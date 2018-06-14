package controllers;

import cache.ItemsCache;
import domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.ItemsService;

import java.util.List;

import static java.util.Arrays.asList;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemsController {

	private final ItemsService itemsService;

	@Autowired
	public ItemsController(ItemsService itemsService) {
		this.itemsService = itemsService;
	}

	@RequestMapping(method = GET)
	public List get() {
		return itemsService.getItems();
	}

	@RequestMapping(method = POST)
	public Item save(@RequestBody Item item) {
		itemsService.setItem(item);
		return item;
	}
}
