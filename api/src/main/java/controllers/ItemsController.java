package controllers;

import domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import services.ItemsService;

import java.util.List;
import java.util.Optional;

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
		System.out.println(itemsService.getItems());
		return itemsService.getItems();
	}

	@RequestMapping(method = POST)
	public Item save(@RequestBody Item item, @RequestParam("file") Optional<MultipartFile> file) {
		System.out.println(item);
		System.out.println(file);
		itemsService.setItem(item);
		return item;
	}

	/*@RequestMapping(method = POST)
	public Item save2(HttpServletRequest request ) throws IOException, ServletException {

		Map<String, String[]> parameters = request.getParameterMap();
		System.out.println("\n\n\n\n\n\n\n");
		System.out.println(parameters);
		System.out.println("\n\n\n\n\n\n\n");

		return new Item();
	}*/

	/*@RequestMapping(method = POST)
	public Item save2(@RequestParam("myFile") MultipartFile itemImg )  {


		System.out.println("\n\n\n\n\n\n\n");
		System.out.println("Class: " + itemImg.getClass());
		System.out.println(itemImg);
		System.out.println("\n\n\n\n\n\n\n");


		return new Item();
	}*/
}
