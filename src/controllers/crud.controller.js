// CRUD Controller:

const get = (model, filename = null) => async (req, res) => {
	try {
		const items = await model.find({}).lean().exec();
        if (filename) {
            return res.render(filename, {items: items});
        }
		return res.status(200).send({ items });
	} catch (err) {
		return res.status(400).send({ err });
	}
}

const getOne = (model, filename = null) => async (req, res) => {
	try {
		const item = await model.find({ _id: req.params.id }).lean().exec();
        if (filename) {
            return res.render(filename, {item});
        }
		return res.status(200).send({ item });
	} catch (err) {
		return res.status(400).send({ err });
	}
}

const post = (model) => async (req, res) => {
	try {
		const item = await model.create(req.body);
		return res.status(201).send({ item });
	} catch (err) {
		return res.status(400).send({ err });
	}
}

const updateOne = (model) => async (req, res) => {
	try {
		const item = await model.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).lean().exec();
		return res.status(200).send({ item });
	} catch (err) {
		return res.status(400).send({ err });
	}
}

const deleteOne = (model) => async (req, res) => {
	try {
		const item = await model.findByIdAndDelete({ _id: req.params.id }).lean().exec();
		return res.status(200).send({ item });
	} catch (err) {
		return res.status(400).send({ err });
	}
}

module.exports  = {
	get,
	getOne,
	post,
	updateOne,
	deleteOne
};