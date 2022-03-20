import GroupsModel from "../Models/Groups";

export const Create_Group = async (req, res) => {
  const { groupName } = req.body;

  const newGroup = new GroupsModel({
    groupName: groupName,
    Members: req.User._id,
  });

  const savedgroup = await newGroup.save();
  if (savedgroup)
    return res
      .status(200)
      .json({ Success: true, msg: "Group is Created", savedgroup });
};

export const getAllgroups = async (req, res) => {
  const id = req.User._id;

  const Groups = await GroupsModel.find({
    Members: { $in: [id] },
  });

  res.status(200).json({ Groups });
};

export const addnewingroup = async (req, res) => {
  const { groupId } = req.params;

  const GroupExist = await GroupsModel.findById(groupId);

  if (!GroupExist)
    return res.status(400).json({ msg: "Group not exist ", Success: false });

  if (GroupExist.Members.includes(req.User._id)) {
    return res
      .status(400)
      .json({ msg: "you allready in a group ", Success: false, GroupExist });
  }

  const updateGroup = await GroupsModel.findByIdAndUpdate(
    groupId,
    {
      $push: { Members: req.User._id },
    },
    { new: true }
  );

  if (updateGroup) return res.status(200).json({ Success: true, updateGroup });
};
